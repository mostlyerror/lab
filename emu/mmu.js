
/*
 *
 * GameBoy Memory Regions Notes
 * ------------------------------------------------------------------------
 *
 * 0000 - 3FFF : Cartridge ROM, bank 0
 * split into...
 *
 *      0000 - 00FF : BIOS
 *      This is removed from mem map after BIOS runs, and becomes addressable.
 *
 *      0100 - 014F : Cartridge Header
 *      contains data about its name, manufacturer, has specific format.
 *
 * 4000 - 7FFF : Cartridge ROM, other banks
 * subsequent 16KB "banks" made available one by one here
 * Cartridge contains a chip to page between banks
 *
 * 8000 - 9FFF : Graphics RAM
 * background and sprite data, can be altered by cartridge
 *
 * A0000 - BFFF : Cartridge (External) RAM
 * small amount of writable memory, addl 8k chunks made available here
 *
 * C000 - DFFF : Working RAM
 * Gameboy internal 8K RAM, cpu can read/write
 *
 * E000 - FDFF : Working RAM (shadow)
 * exact copy of working RAM (8k later) ? 
 *
 * FE00 - FE9F : Graphics Sprite Information
 * sprite data, including position/attributes (graphics chip writes here ?)
 *
 * FF00 - FF7F : Memory-mapped I/O
 * control values for GameBoy subystems (graphics, sound, etc)
 * available to cpu directly
 *
 * FF80 - FFFF : Zero-page RAM
 * "high-speed" area of 128 bytes at "top" (even though this is page 255) of memory.
 *
*/

MMU = {
    _inbios: 1,  // flag indicating BIOS is mapped in

    // Memory regions (initialized at reset)
    _bios: [],
    _rom:  [],
    _wram: [],
    _eram: [],
    _zram  [],

    // read a byte from memory
    rb: function (addr)
    {
        switch(addr & 0xF000)
        {
            // BIOS (256b)/ROM0
            case 0x0000:
                if(MMU._inbios)
                {
                    if(addr < 0x0100)
                        return MMU._bios[addr];
                    else if(Z80._r.pc == 0x0100)
                        MMU._inbios = 0;
                }
                return MMU._rom[addr];

            // ROM0
            case 0x1000:
            case 0x2000:
            case 0x3000:
                return MMU._rom[addr];

            // ROM1 (unbanked) (16k)
            case 0x4000:
            case 0x5000:
            case 0x6000:
                return MMU._rom[addr];

            // Graphics: VRAM (8k)
            case 0x8000:
            case 0x9000:
                return GPU._vram[addr & 0x1FFF];

            // External RAM (8k)
            case 0xA000:
            case 0xB000:
                return MMU._eram[addr & 0x1FFF];

            // Working RAM (8k)
            case 0xC000:
            case 0xD000:
                return MMU._wram[addr & 0x1FFF];

            // Working RAM shadow, I/O, Zero-page RAM
            case 0xF000:
                switch(addr & 0x0F00)
                {
                    // working ram shadow
                    case 0x000:
                    case 0x100:
                    case 0x200:
                    case 0x300:
                    case 0x400:
                    case 0x500:
                    case 0x600:
                    case 0x700:
                    case 0x800:
                    case 0x900:
                    case 0xA00:
                    case 0xB00:
                    case 0xC00:
                    case 0xD00:
                        return MMU._wram[addr & 0x1FFF];

                    // Graphics: object attribute memory
                    // OAM is 160b, remaining bytes read as 0
                    case 0xE00:
                        if(addr < 0xFEA0)
                            return GPU._oam[addr & 0xFF];
                        else
                            return 0;

                    // Zero-page
                    case 0xF00:
                        if(addr >= 0xFF80)
                            return MMU._zram[addr & 0x7F];
                        else
                            return 0; // I/O control handling currently unhandled.


                }

        }
    }, 
    rw: function (addr) {
        return MMU.rb(addr) + (MMU.rb(addr+1) << 8);
    }
    wb: function (addr, val) {}, // write 8bit byte to addr
    ww: function (addr, val) {} // write 16bit word
};

