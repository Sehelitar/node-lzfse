declare namespace lzfse {

    function compressSync(input: Buffer): Buffer;
    function decompressSync(input: Buffer): Buffer;

}

export as namespace lzfse;
export = lzfse;