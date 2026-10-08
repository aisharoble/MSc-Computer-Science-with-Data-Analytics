# Object-Oriented Programming and Data Structures

Five Python notebooks from my MSc Computer Science with Data Analytics assignment, covering class design, inheritance, sorting, binary trees and directed weighted graphs.

## Notebook guide

| Notebook | Task | Concepts demonstrated |
| --- | --- | --- |
| [Q1](OOPQ1.ipynb) | Convert a weather function into a class | Instance variables, constructors and conditional logic |
| [Q2](OOPQ2-1.ipynb) | Model products, books and puzzles | Inheritance, method overriding, name mangling, `__lt__` and `__gt__` |
| [Q3](OOPQ3-2.ipynb) | Sort numbered strings and build a heap-backed collection | Numeric key extraction, recursive heapify and heap sort |
| [Q4](OOPQ4-1.ipynb) | Construct a binary tree and implement parity-based insertion | Nodes, postorder reasoning, recursion and input filtering |
| [Q5](OOPQ5-1.ipynb) | Build and reverse a directed weighted graph | Adjacency lists, manual breadth-first traversal and `__invert__` |

## Selected results

- Q1 classifies a temperature of 18 as a mild day.
- Q2 compares books by page count and puzzles by number of pieces.
- Q3 sorts the example strings into numeric order from 1 to 5.
- Q4 discards the example string and floating-point inputs while continuing to process integers.
- Q5 uses `~graph` to produce a new graph with reversed edge directions and unchanged weights.

## How to run

Use Python 3 and Jupyter Notebook or JupyterLab. These notebooks use Python's built-in features and require no additional analysis libraries.

```bash
python -m pip install jupyterlab
python -m jupyter lab
```

Open a notebook and run its cells from top to bottom. Each notebook is independent.

## Execution check and portfolio preparation

All code cells in each portfolio notebook were executed sequentially in a fresh Python namespace without an exception. This checks that the included examples run; it is not a complete assessment of correctness against the marking rubric.

Two syntax blockers were removed from the portfolio copies: an unused placeholder tree-building cell in Q4, and a stray closing bracket in Q5. Saved outputs, execution counts and incidental cell metadata were cleared. The uploaded source files were left unchanged.

## Limitations and reflection

- Q3 rebuilds the heap after each insertion. A sift-up implementation would make individual insertions more efficient.
- Q4 partitions odd and even values below a root of 0. The overall structure is not a conventional binary search tree, although insertion within each partition uses search-tree comparisons. Python booleans also pass the current `isinstance(value, int)` check.
- Q5's hand-written traversal does not fully match the implemented edge list: the code contains `B -> L`, while the explanation describes `L -> B`. The final visiting order is still G, B, N, C, L for the code's neighbour order, but the queue states need reconciliation with the original diagram.
- The manual heap-sort explanation abbreviates the final extraction steps.

The assignment question document was used to understand the tasks. This portfolio presents the solution notebooks and a task summary rather than reproducing the exam paper.
