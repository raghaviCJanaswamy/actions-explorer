cmake_minimum_required(VERSION 3.10)
project(actions-explorer)

set(CMAKE_CXX_STANDARD 11)

find_package(SQLite3 REQUIRED)

add_executable(actions-explorer main.cpp)
target_link_libraries(actions-explorer SQLite::SQLite3)