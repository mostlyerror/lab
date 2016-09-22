
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
 *
 *
 * 
 *
 *
 *
 *
 *

MMU = {
    rb: function (addr) {}, // read 8bit byte at addr
    rw: function (addr) {}, // read 16-bit word at addr
    wb: function (addr, val) {}, // write 8bit byte to addr
    ww: function (addr, val) {} // write 16bit word
};

*/
