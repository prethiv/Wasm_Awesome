Installing Emscripten:

# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
Note

On Windows, run emsdk instead of ./emsdk, and emsdk_env.bat instead of source ./emsdk_env.sh.

Verifying Emscripten
If you haven’t run Emscripten before, run it now with:

./emcc -v

/*
 * Copyright 2011 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */

#include <stdio.h>

int main() {
  printf("hello, world!\n");
  return 0;
}

./emcc tests/hello_world.c

node a.out.js

Optimizing code
Emscripten, like gcc and clang, generates unoptimized code by default. You can generate slightly-optimized code with the -O1 command line argument:

./emcc -O1 tests/hello_world.cpp

./emcc -O2 tests/hello_world.cpp


