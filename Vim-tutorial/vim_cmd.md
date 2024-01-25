# VIM CMDS

1. :q  - quiet or exit from vim editor
2. :wq - save file and quit from vim editor
3. :q! - quit without saving the file

## Inside Command Mode

1. j - move cursor down
2. k - move cursor up
3. l - move cursor forward
4. h - move cursor backward
5. i/a - enable insert mode
6. ESC - return to command mode
7. g - navigate user to top of the file
8. G - navigate user to bottom of the file
9. dd - delete whole line
10. u - undo changes
11. yy - copy line
12. p - paste line
13. V - enable visual mode( allows you to select bluk of lines)
14. O - add new empty line above cursor
15. W - move cursor from one blank space to another blank space forward (from one word to another word)
16. B - move cursor from one blank space to another blank space backward
17. :1 - move cursor to 1st line
18. :30 - move cursor to 30th line means (:line number)
19. 0 (Zero) - move cursor to beginig pf line
20. % - mover cursro from start of brcket to end of bracket(closing bracket) code
```JS
      - Note - for example my cursor on line 30({) at curly braces({}) if i press 'ctrl + % ' then it move cursor to line 41  (};)
        const initState = {
          redeemHistory: [],
          activeColumn: {
            columnName: 'DATE',
            orderAsc: false,
          },
          limit: 20,
          paginationHtml: '',
          paginationUrl: '',
          resendMessagePopup: {},
          emailMessagePopup: {},
        };
```
21. d% - delte block of code
```JS
  const initState = ;
```
22. dw - delete word or cut word can be paste after
23. ct and till what  - delete block of code between brackets code = { 'something' } on same line only
- note :- If i want to delete code from curly braces then i pres c+t+}(closing curly bracket) workes on same line only not on multiple lines 
```js
  const obj = { state, action} - //works for this
  const activeColumn: {
            columnName: 'DATE',
            orderAsc: false,
          },    //not work for this
  redeemHistory - //if i want to change only redeem word then i press 'c+t+H'
```
24. '*' - find similar words where cursor is place on
25. A - move cursor to end of file and enble INSERT mode
26. I - move cursor to beginig of line and enable INSERT mode
27. x(small) - delete letter after the cursor or on cursor eg. Yogesh - it delete leterr h if my cursor is on h
28. X(cap) - delete letter before the cursor - eg Yogesh delete s if my cursor is on h
29. ~ - make letter capital if letter is small and vise versa
30. n(number eg 1 or 4 or 5 )~ - change whatever number you provide make it capital if its small and vise a versa
31. cw - delete word and put you to insert mode
32. cw and . - delete the word and put you in insert word if u want to do same changes on another line then press .(dot)
33. C - delete whole line and put into insert mode
34. << - intend code/line backword or move line backward like tab button
35. '>>' - intend code/line forward or move line forward like tab button
36. qw - start recording
37. q - stop recording when u are in recording mode