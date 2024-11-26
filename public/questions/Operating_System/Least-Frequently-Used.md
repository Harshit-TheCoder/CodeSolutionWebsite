### C
```
#include <stdio.h>
#include <limits.h>

void LFU(int pages[], int np, int nf) {
    int frames[nf], freq[nf];
    int pageFaults = 0;

    for (int i = 0; i < nf; i++) {
        frames[i] = -1;    // Initialize frames as empty
        freq[i] = 0;       // Initialize frequencies to zero
    }

    for (int i = 0; i < np; i++) {
        int page = pages[i];
        int found = 0, leastFreqIdx = 0;

        // Check if page is already in frames
        for (int j = 0; j < nf; j++) {
            if (frames[j] == page) {
                freq[j]++;
                found = 1;
                break;
            }
            if (freq[j] < freq[leastFreqIdx]) leastFreqIdx = j;
        }

        if (!found) {
            frames[leastFreqIdx] = page;
            freq[leastFreqIdx] = 1;
            pageFaults++;
        }
    }

    printf("Total Page Faults (LFU): %d\n", pageFaults);
}


   

```