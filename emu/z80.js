Z80 = {
    _clock: [m:0, t:0],

    _r: {
        a:0, b:0, c:0, d:0, e:0, h:0, l:0, f:0, // 8bit registers
        pc:0, sp:0,                             // 16bit registers
        m:0, t:0                                // clock for last instr
    }

    _map: [
        Z80._ops.NOP,
        // ...
    ]

    _ops: {
        NOP: function () {
            Z80._r.m = 1;
            Z90._r.t = 4;
        }
    },

    reset: function () {
        Z80._r.a = 0; Z80._r.b = 0; Z80._r.c = 0; Z80._r.d = 0;
        Z80._r.e = 0; Z80._r.h = 0; Z80._r.l = 0; Z80._r.f = 0;
        Z80._r.sp = 0; Z80._r.pc = 0; // begin execution at 0
        Z80._clock.m = 0; Z80._clock.t = 0;
    }

};

// fetch/decode/execute loop (dispatcher)
var op;
while(true) {
    op = MMU.rb(Z80._r.pc++); // fetch instruction
    Z80._map[op]();           // dispatch
    Z80._r.pc &= 65535;       // mask pc to 16 bits
    Z80._clock.m += Z80._r.m; // add time to cpu clock;
    Z80._clock.t += Z80._r.t;
}

MMU = {
    rb: function (addr) {}, // read 8bit byte at addr
    rw: function (addr) {}, // read 16-bit word at addr
    wb: function (addr, val) {}, // write 8bit byte to addr
    ww: function (addr, val) {} // write 16bit word
};
