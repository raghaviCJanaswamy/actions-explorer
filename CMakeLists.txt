cmake_minimum_required(VERSION 3.10)
project(sample-cpp-project)

set(CMAKE_CXX_STANDARD 11)

find_package(SQLite3 REQUIRED)

add_executable(ACTIONS-EXPLORER main.cpp)
target_link_libraries(ACTIONS-EXPLORER SQLite::SQLite3)