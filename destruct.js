function CALCVAL(a, b) {
    return [
        a + b,
        a - b,
        // undefined,
        a * b,
        a / b,
    ];
}

const [sum, sub = "FORSEN DOUBLE YOU", times, ...etc] = CALCVAL(322, 228);
// const sum = result[0];
// const sub = result[1];

// const [sum, sub] = result;

// console.log(sum, sub, times, etc, );

// OBJECTS
const PERSON = {
    // NAME: "SONIK",
    // AGE: 12,
    ADDRESS: {
        COUNTRY: "POGCHAMP",
        CITY: "VISLAUD",
    }
};

// const NAME = PERSON.NAME;
// const {
//     NAME: name = "W/O NAME!",
//     AGE,
//     CAR = "HAS NO CAR..",
//     ADDRESS: {
//         CITY: city,
//         COUNTRY: country,
//     }
// } = PERSON;

// const { NAME, ...info } = PERSON;

// console.log(NAME, info);

function LOGPERSON({
    NAME: name = "FollowSonik",
    AGE: age = 13,
    ADDRESS: {
        // address = "Kappa",
        city = "PagChomp",
    } }) {
    console.log(`${name} ${age}, ${address = "She'llBeRight"} ${city}`);
}

LOGPERSON(PERSON);

// const user = { name: "Name", password: "Password" };
// const { password, ...monkaS } = user;
// console.log(user);