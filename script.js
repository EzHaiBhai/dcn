const copyToClipboard = async () => {
    try {
      const element = document.querySelector(".user-select-all");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

const LRC = `#include <stdio.h>

// Function to calculate LRC
unsigned char calculateLRC(unsigned char *data, int length) {
    unsigned char lrc = 0;
    for (int i = 0; i < length; i++) {
        lrc += data[i];
    }
    // Take the one's complement of the sum
    lrc = (~lrc) + 1;
    return lrc;
}

// Function to print a byte in binary format
void printBinary(unsigned char byte) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (byte >> i) & 1);
    }
}

int main() {
    // Example data to be sent (replace this with your actual data)
    unsigned char dataToSend[] = {0x41, 0x42, 0x43, 0x44}; // "ABCD" in ASCII
    int dataLength = sizeof(dataToSend) / sizeof(dataToSend[0]);

    // Calculate LRC for the data
    unsigned char lrc = calculateLRC(dataToSend, dataLength);

    // Append LRC to the data
    dataToSend[dataLength] = lrc;

    // Display the data with appended LRC in binary format
    printf("Data with appended LRC (in binary):\n");
    for (int i = 0; i < dataLength + 1; i++) {
        printBinary(dataToSend[i]);
        printf(" ");
    }
    printf("\n");

    return 0;
}
`;

  
  const copyLRC = async () => {
    try {
            await navigator.clipboard.writeText(LRC);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyStack = async () => {
    try {
      const element = document.querySelector(".stack");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copySq = async () => {
    try {
      const element = document.querySelector(".Sq");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyCq = async () => {
    try {
      const element = document.querySelector(".Cq");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyDq = async () => {
    try {
      const element = document.querySelector(".Dq");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copySEL = async () => {
    try {
      const element = document.querySelector(".sel");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyBUB = async () => {
    try {
      const element = document.querySelector(".bub");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyINS = async () => {
    try {
      const element = document.querySelector(".ins");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyLS = async () => {
    try {
      const element = document.querySelector(".ls");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyBS = async () => {
    try {
      const element = document.querySelector(".bs");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };