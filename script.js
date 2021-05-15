
let WasmExports;

let wasmMemory = new WebAssembly.Memory({initial:256, maximum:256});

let wasmTable = new WebAssembly.Table({
    'initial':1,
    'maximum':1,
    'element':'anyfunc'
});

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
}

var getTempRet0 = function() {
  return tempRet0;
}


let asmLibraryArg = {
    "__handle_stack_overflow":()=>{},
    "emscripten_resize_heap":()=>{},
    "__lock":()=>{},
    "__unlock":()=>{},
    "memory":wasmMemory,
    "table":wasmTable,
    "setTempRet0":setTempRet0
};

let info ={
    //env
    //wasi_snapshot_preview1
    'env':asmLibraryArg,
    'wasi_snapshot_preview1':asmLibraryArg
};



async function loadWasm(){
    console.log("Inside wasm");
    let response = await fetch('arithmetic.wasm');
    console.log("Response loaded ",response);
    let bytes = await response.arrayBuffer();
    console.log("Bytes ",bytes);
    let wasmObj = await WebAssembly.instantiate(bytes,info);
    console.log("Wasmobj ",wasmObj);
    WasmExports = wasmObj.instance.exports;
}

loadWasm();