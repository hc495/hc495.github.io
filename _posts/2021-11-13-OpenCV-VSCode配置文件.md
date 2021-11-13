---
title: OpenCV-C++-VSCode配置
tags: 
  - C++程序设计
---

下载解压：

https://opencv.org/releases/

https://blog.csdn.net/you_zai/article/details/119848662

task.json:

```json
{
    "version": "2.0.0",
    "command": "g++",
    "args": [
        "-g",
        "${file}",
        "-o",
        "${file}.exe",
        "-I", "D:/OpenCV/opencv/build/include",
        "-I", "D:/OpenCV/opencv/build/include/opencv2",
        "-L", "D:/OpenCV/opencv/build/install/x64/mingw/lib",
        "-l", "libopencv_calib3d453",
        "-l", "libopencv_core453",
        "-l", "libopencv_dnn453",
        "-l", "libopencv_features2d453",
        "-l", "libopencv_flann453",
        "-l", "libopencv_gapi453",
        "-l", "libopencv_highgui453",
        "-l", "libopencv_imgcodecs453",
        "-l", "libopencv_imgproc453",
        "-l", "libopencv_ml453",
        "-l", "libopencv_objdetect453",
        "-l", "libopencv_photo453",
        "-l", "libopencv_stitching453",
        "-l", "libopencv_video453",
        "-l", "libopencv_videoio453",
        "-l", "libopencv_ximgproc453"
        ],    // 编译命令参数
    "problemMatcher": {
        "owner": "cpp",
        "fileLocation": ["relative", "${workspaceRoot}"],
        "pattern": {
            "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
            "file": 1,
            "line": 2,
            "column": 3,
            "severity": 4,
            "message": 5
        }
    }
}
```

c_cpp_p..

```json
{
    "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${workspaceFolder}/**",
                "D:/application/opencv4.5.3_bulid/install/include",
                "D:/application/opencv4.5.3_bulid/install/include/opencv2"
    
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "compilerPath": "D:/application/mingw64/bin/gcc.exe",
            "cStandard": "c11",
            "cppStandard": "c++17",
            "intelliSenseMode": "clang-x64"
        }
    ],
    "version": 4
}
```


```cpp
#include <opencv2/core/core.hpp> 
#include <opencv2/highgui/highgui.hpp>   
using namespace cv;
```

搞不好 VSCode不配 建议用VS搭配OpenCV

OpenCV.props

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ImportGroup Label="PropertySheets" />
  <PropertyGroup Label="UserMacros" />
  <PropertyGroup>
    <IncludePath>D:\OpenCV\opencv\build\include\opencv2;D:\OpenCV\opencv\build\include;$(IncludePath)</IncludePath>
    <LibraryPath>D:\OpenCV\opencv\build\x64\vc15\lib;$(LibraryPath)</LibraryPath>
  </PropertyGroup>
  <ItemDefinitionGroup>
    <ClCompile>
      <AdditionalIncludeDirectories>D:\OpenCV\opencv\build\include\opencv2;D:\OpenCV\opencv\build\include;%(AdditionalIncludeDirectories)</AdditionalIncludeDirectories>
    </ClCompile>
    <Link>
      <AdditionalDependencies>opencv_world343d.lib;%(AdditionalDependencies)</AdditionalDependencies>
    </Link>
  </ItemDefinitionGroup>
  <ItemGroup />
</Project>
```