// Union type
let variable: string | number;
variable = "hello guys";  // ✅ Assigned string (now variable is narrowed to string in this scope)

// Type guard: narrows 'variable' to string type within this block
if (typeof variable === "string") {
    variable.toUpperCase();  // ✅ OK - TypeScript knows it's string here
}
// else if block won't execute since variable is string
else if (typeof variable === "number") {
    variable.toFixed(2);  // ❌ Would error if reached - but unreachable here
}

// Function with union type parameter
function abcd(variable: number | string) {
    // Type guard narrows parameter to string within this block
    if (typeof variable === "string") {
        variable.toUpperCase();  // ✅ OK - narrowed to string
    }
    // Type guard narrows parameter to number within this block
    else if (typeof variable === "number") {
        variable.toFixed(2);     // ✅ OK - narrowed to number
    }
    // TypeScript infers 'variable' is never here (exhaustive check)
}

abcd(100);  // ✅ Calls function with number - executes number branch
