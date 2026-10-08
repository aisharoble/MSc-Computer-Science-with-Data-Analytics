# Programming and Algorithms

A five-question Python assignment from my MSc Computer Science with Data Analytics. This project explores functions, collections, text processing, sorting, interactive input and file handling.

## Notebook guide

| Notebook | Task | Skills |
| --- | --- | --- |
| [Q1](question1-2.ipynb) | Find elements shared by two lists using a loop and list comprehension | Functions, membership checks, order and duplicate preservation |
| [Q2](question2-2.ipynb) | Look up country capitals and update missing entries | Dictionaries, conditional logic and user input |
| [Q3](question3.ipynb) | Read sentences, remove punctuation and sort words by length | File reading, while loops, string translation and bubble sort |
| [Q4](question4-2.ipynb) | Collect two sets, find their symmetric difference and filter words | Set operations, character comparisons and file writing |
| [Q5](question5-2.ipynb) | Collect words until a sentinel and apply a validated threshold | Input validation, case-insensitive comparison and reusable functions |

## Example results

- Both Q1 implementations return `[2, 2, 3]` for the included example, preserving duplicates from the first list.
- Q2 retrieves Santiago for Chile and can add France with a user-supplied capital.
- Q3 orders words by ascending length using bubble sort.
- Q4 calculates symmetric difference using `(a - b) | (b - a)`.
- With the sample words apple, banana, carrot, dog and elephant, Q5's threshold `c` produces Dog and Elephant in the output file.

## How to run

Use Python 3 with Jupyter Notebook or JupyterLab. The notebooks use built-in Python features and the standard-library `string` module.

```bash
python -m pip install jupyterlab
python -m jupyter lab
```

Start Jupyter from this project folder so Q3 can find `text.txt`. Open a notebook and run its cells from top to bottom.

- Q2 asks for the capital of France in its demonstration; enter `Paris`.
- Q4 asks for five distinct non-empty words for each set, followed by a single character. Duplicate words do not count towards five.
- Q5 asks for words until you enter `0`, then asks for a single alphabetic threshold.
- Q4 and Q5 both overwrite the local `output.txt`. The included file is a sample Q5 result; word order may differ because the program iterates over a set.

## Supporting files

- [text.txt](text.txt): sample input for Q3, including a blank line.
- [output.txt](output.txt): sample output containing Dog and Elephant. The uploaded `output(1).txt` was identical, so only one copy is included.

## Validation

All five notebooks' code cells were executed sequentially in separate Python namespaces. Interactive prompts were supplied with sample responses in a temporary working folder. Checks confirmed Q1's duplicate-preserving result, Q3's length sorting and Q5's expected output and invalid-threshold response.

No solution code was changed. Saved outputs, including an interrupted Q2 run, execution counts and incidental cell metadata were cleared in the portfolio copies. Original uploads remain unchanged. Execution checks do not establish full compliance with the assessment rubric.

## Limitations and reflection

- Q3 uses `string.punctuation`, which removes ASCII punctuation but leaves the en dash in the supplied input. Unicode punctuation handling would improve the text cleaning.
- Q4 assumes a one-character threshold; an empty or multi-character input causes `ord()` to raise an error. Q5 adds threshold validation.
- Character comparison is based on code points rather than language-aware alphabetical ordering. Q5 accepts Unicode alphabetic thresholds.
- Set iteration makes output order variable. Sorting before writing would make the output reproducible.
- Bubble sort demonstrates the requested algorithm, but built-in sorting is more suitable for larger inputs.

The assignment question document was reviewed to understand the tasks. The portfolio includes the solution notebooks and a summary rather than reproducing the exam paper.
