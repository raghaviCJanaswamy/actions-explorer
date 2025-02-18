#include <iostream>
#include <cstring>
#include <sqlite3.h>

void bufferOverflow() {
    char buffer[10];
    strcpy(buffer, "This is a very long string that will overflow the buffer");
    std::cout << "Buffer content: " << buffer << std::endl;
}

void sqlInjection(const char* userInput) {
    sqlite3* db;
    sqlite3_open(":memory:", &db);

    char sql[256];
    sprintf(sql, "SELECT * FROM users WHERE name = '%s';", userInput);

    char* errMsg = 0;
    sqlite3_exec(db, sql, 0, 0, &errMsg);

    if (errMsg) {
        std::cerr << "SQL error: " << errMsg << std::endl;
        sqlite3_free(errMsg);
    }

    sqlite3_close(db);
}

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <user input>" << std::endl;
        return 1;
    }

    bufferOverflow();
    sqlInjection(argv[1]);

    return 0;
}