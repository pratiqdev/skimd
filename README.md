# skimd

Chainable regex tests for bulk markdown proofing

## What / how

**How to accumulate data from files?**  
Extract all content from files and append to 'dataset' array with filename

**CLI arguments for files to test / tests to run?**  
Json config should hold defaults that can be overridden by arguments such as:

- select file(s) or dir(s) to test
- select test(s) to run

e.g. skimd -f file_1.md file_2.md -t test_3 test_8

Or overwritten by arguments like:

- set default file(s) or dir(s) to test
- activate or deactivate the usage of tests

**Use recent / last config like Reginald?**
