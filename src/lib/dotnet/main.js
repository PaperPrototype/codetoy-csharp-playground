// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from './dotnet.js'

const { setModuleImports, getAssemblyExports, getConfig, runMain } = await dotnet
    .withApplicationArguments("start")
    .create();

setModuleImports('main.js', {
    setResult: (result) => console.log("setResult:", result)
});

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

function add(a, b) {
    const result = exports.SampleModule.Add(a, b);
    console.log("add result:", result)
    return result;
}

// run the C# Main() method
/* 
    await runMain(); -> TypeError: Cannot read properties of undefined (reading 'length') 

    needs the mainAssemblyName and an empty array for the second argument
    https://github.com/dotnet/aspnetcore/blob/bd6f77dbcf17cf991ae5a36693ae3aa2e1a80278/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts#L40
*/
await runMain(config.mainAssemblyName, []); // will log "Hello, Browser!" to the console

export {
    add
}