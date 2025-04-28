using System;
using System.Diagnostics;
using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;

Console.WriteLine("Hello, Browser!");

// if (args.Length == 1 && args[0] == "start")
//     SampleModule.Start();

// while (true)
// {
//     SampleModule.Render();
//     await Task.Delay(1000);
// }

partial class SampleModule
{
    // call JS from C#
    [JSImport("setResult", "main.js")]
    internal static partial void SetResult(int result);

    // call C# from JS
    [JSExport]
    internal static int Add(int a, int b)
    {
        int result = a + b;
        SetResult(result);
        return a + b;
    }
}
