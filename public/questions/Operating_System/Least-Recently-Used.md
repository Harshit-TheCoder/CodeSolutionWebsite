### C
```
#include <stdio.h>

void LRU(int pages[], int np, int nf) {
    int frames[nf], recent[nf];
    int pageFaults = 0, time = 0;

    for (int i = 0; i < nf; i++) {
        frames[i] = -1;
        recent[i] = 0;
    }

    for (int i = 0; i < np; i++) {
        int page = pages[i];
        int found = 0, leastRecentIdx = 0;

        // Check if page is already in frames
        for (int j = 0; j < nf; j++) {
            if (frames[j] == page) {
                recent[j] = time++;
                found = 1;
                break;
            }
            if (recent[j] < recent[leastRecentIdx]) leastRecentIdx = j;
        }

        if (!found) {
            frames[leastRecentIdx] = page;
            recent[leastRecentIdx] = time++;
            pageFaults++;
        }
    }

    printf("Total Page Faults (LRU): %d\n", pageFaults);
}

```