### C
```
#include <stdio.h>

void FIFO(int pages[], int np, int nf) {
    int frames[nf];
    int pageFaults = 0, index = 0;

    for (int i = 0; i < nf; i++) {
        frames[i] = -1;
    }

    for (int i = 0; i < np; i++) {
        int page = pages[i];
        int found = 0;

        // Check if page is already in frames
        for (int j = 0; j < nf; j++) {
            if (frames[j] == page) {
                found = 1;
                break;
            }
        }

        if (!found) {
            frames[index] = page;
            index = (index + 1) % nf;
            pageFaults++;
        }
    }

    printf("Total Page Faults (FIFO): %d\n", pageFaults);
}

```