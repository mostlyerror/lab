
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
