
/*
// fetch/decode/execute loop (dispatcher)
var op;
while(true) {
    op = MMU.rb(Z80._r.pc++); // fetch instruction
    Z80._map[op]();           // dispatch
    Z80._r.pc &= 65535;       // mask pc to 16 bits
    Z80._clock.m += Z80._r.m; // add time to cpu clock;
    Z80._clock.t += Z80._r.t;
}
*/
