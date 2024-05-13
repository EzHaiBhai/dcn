const copyToClipboard = async () => {
  try {
    const element = document.querySelector(".user-select-all");
    await navigator.clipboard.writeText(element.textContent);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyLRC = async () => {
  try {
    await navigator.clipboard.writeText(LRC);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyCHKSUM = async () => {
  try {
    await navigator.clipboard.writeText(CHKSUM);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyCRC = async () => {
  try {
    await navigator.clipboard.writeText(CRC);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyHAM = async () => {
  try {
    await navigator.clipboard.writeText(HAM);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyLEAK = async () => {
  try {
    await navigator.clipboard.writeText(LEAK);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyTOKEN = async () => {
  try {
    await navigator.clipboard.writeText(TOKEN);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyPIPE = async () => {
  try {
    await navigator.clipboard.writeText(PIPE);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyCHARCNT = async () => {
  try {
    await navigator.clipboard.writeText(CHARCNT);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyBIT = async () => {
  try {
    await navigator.clipboard.writeText(BIT);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyFRAMES = async () => {
  try {
    await navigator.clipboard.writeText(FRAMES);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyBYTESTF = async () => {
  try {
    await navigator.clipboard.writeText(BYTESTF);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const copyBITSTF = async () => {
  try {
    await navigator.clipboard.writeText(BITSTF);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const BITSTF = `
#include<stdio.h>
#include<string.h>

int main()
{
	int i=0,j=0,l=0;
	char data[1024];
	char frame[1024]="";
	printf("\\n Enter the Bit Stream : ");
	scanf("%s",data);

int size = strlen(data);
for(i,j;i<size;i++,j++)
{
	if(i==0 || i%4==0)
	{
		frame[j]="#";
		j++;	
	}
	frame[j]=data[i];
}

for(l;l<strlen(frame);l++)
{
	printf("%c",frame[l]);
}

return 0;
}
`;

const BYTESTF = `
#include<stdio.h>
#include<unistd.h>
#include<string.h>
#include<fcntl.h>
 //for exa: dlestkhelldleo PUdleetx
void main()
{
	char str[1024];
	char str1[1024];
	printf("Enter the String:");
	scanf("%s",str);
	
	int i,j;
	char *start="dlestx";
	char *end="dleetx"; 
	char *startend="dle";

	int l=strlen(str);
	int l1=strlen(start);
	int incharpos;
	char inchar;
	printf("Your String is : %s ",str);
	printf("\\n");
	start:
		printf("Enter the  position that you want to stuff character:");
		scanf("%d",&incharpos);
	if(incharpos>=l)
	{
	  printf("Sorry your enter position is grater than lenght of Input String \\n");
	  goto start;
	}
	printf("Enter the Character that you want to stuff:");
	scanf(" %c",&inchar);
	int count=0;
	for(i=0;i<l1;i++)
	{
	  str1[i]=start[i];
	  count++;
	}
	for(i=0;i<l;i++)
	{
		
	   if(i==incharpos)
 	   {

		for(j=0;j<strlen(startend);j++)
		{
			str1[count]=startend[j];
			count++;
		}
		str1[count]=inchar;
		count++;
		for(j=0;j<strlen(startend);j++)
		{
			str1[count]=startend[j];
			count++;
		}
	 	
	   }		
	   str1[count]=str[i];  
	  count++;  
	  
	}
	
	for(j=0;j<l1;j++)
	{
	  str1[count]=end[j];
	  count++;
	}
	
	printf("%s",str1);
	
		
	printf("\\n");

}
`;


const FRAMES =`
#include<stdio.h>
#include<string.h>
#include<unistd.h>
#include<sys/syscall.h>
#include<fcntl.h>
int  main()
{
	printf("\\n Enter the Message That You want to sent.....:)\\n");
	char str[1024];
	char smsg[1024];
	char readData[1024];
	scanf("%s",str);
	int msglen=strlen(str);
	int l=4;
	int i,j;
	int count=0;
	int fds[2];
	for(i=0;i<msglen;i++)
	{
		for(j=0;j<l;j++)
		{
		  smsg[count]=str[i];
		  i++;
		  count++;
		}
		i--;
		smsg[count]='#';
		count++;
	}

	for(i=0;i<strlen(smsg);i++)
	{
	  printf("%c",smsg[i]);
	}

	int fd=creat("test1.txt",777);
	
	if(fd<0)
	{
	  printf("file already created");
	}
	else
	{
		write(fd,smsg,strlen(smsg));
		
		read(fd,readData,sizeof(smsg));
	}

	return 0;
}
`;

const BIT = `
//DCN LAB Program: Write a C Program to implement BitCount Method.

#include "stdio.h"
#include "string.h"

int main()
{
    unsigned int cnt0=0, cnt1=0, iCnt=0, size;
    char stream[256];
    
printf("Enter BitStream:");
scanf("%s",stream);
size = strlen(stream);
for(int i=0; i<size; i++)
{
   if(stream[i] == '1')
   {
        cnt1++;
   }
   else if(stream[i] == '0')
   {
        cnt0++;
   }
   else
   {
        iCnt++;
   }
}

printf("\\n No. of Bits: %d", size);
printf("\\n No. of 1s Bits: %d", cnt1);
printf("\\n No. of 0s Bits: %d", cnt0);
printf("\\n No. of Invalid Bits: %d", iCnt);

return 0;
}
`;


const CHARCNT = `
#include <stdio.h>
#include <string.h>
 
int main()
{
   char string[100];
   int c = 0, count[26] = {0}, x;
 
   printf("Enter a string\\n");
   gets(string);
 
   while (string[c] != '\\0') {
   /** Considering characters from 'a' to 'z' only and ignoring others. */
 
      if (string[c] >= 'a' && string[c] <= 'z') {
         x = string[c] - 'a';
         count[x]++;
      }
 
      c++;
   }
 
   for (c = 0; c < 26; c++)
         printf("%c occurs %d times in the string.\\n", c + 'a', count[c]);
 
   return 0;
}
`;

const PIPE = `
#include<stdio.h>
#include<string.h>

void main()
{

	int n;
	char buff[1024];
	int flag[2];
	char *data="hello how are you";	
	pipe(flag);
	
	write(flag[1],data,strlen(data));

	n=read(flag[0],buff,1024);
	int i;
	
	for(i=0;i<strlen(buff);i++)
	{
		printf("%c",buff[i]);
	 		
	}
	printf("\\n");
	
}
`;

const TOKEN = `
#include <stdio.h>
#include <stdbool.h>
#include <unistd.h> // for usleep function

int main() {
    int bucket_size, output_rate;

    // User input for bucket size and output rate
    printf("Enter the bucket size: ");
    scanf("%d", &bucket_size);
    printf("Enter the output rate of the bucket: ");
    scanf("%d", &output_rate);

    int bucket = 0;  // Current size of the bucket

    while (true) {
        // Generate some data, e.g., incoming packets
        int incoming_packets;
        printf("Enter the number of incoming packets: ");
        scanf("%d", &incoming_packets);

        // Add incoming packets to the bucket
        if (bucket + incoming_packets <= bucket_size) {
            bucket += incoming_packets;
        } else {
            printf("Bucket overflow! Dropping %d packets.\\n", incoming_packets + bucket - bucket_size);
            bucket = bucket_size;  // Bucket is full
        }

        // Transmit data from the bucket
        if (bucket >= output_rate) {
            printf("%d packets transmitted.\\n", output_rate);
            bucket -= output_rate;
        } else {
            printf("Bucket empty.\\n");
        }

        // Wait for a second before the next iteration
        usleep(1000000);  // Sleep for 1 second (1 million microseconds)
    }

    return 0;
}

`;

const LEAK = `
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // For sleep function

int main() {
    int i, packets[10], content = 0, newcontent, time, clk, bucket_size, output_rate;

    // Generate random packet sizes
    for (i = 0; i < 5; i++) {
        packets[i] = rand() % 10;
        if (packets[i] == 0)
            i--; // Regenerate if packet size is 0
    }

    printf("\\nEnter output rate of the bucket: ");
    scanf("%d", &output_rate);

    printf("\\nEnter Bucket size: ");
    scanf("%d", &bucket_size);

    for (i = 0; i < 5; ++i) {
        if ((packets[i] + content) > bucket_size) {
            if (packets[i] > bucket_size)
                printf("\\nIncoming packet size %d greater than the size of the bucket\\n", packets[i]);
            else
                printf("\\nBucket size exceeded\\n");
        } else {
            newcontent = packets[i];
            content += newcontent;
            printf("\\nIncoming Packet: %d\\n", newcontent);
            printf("Transmission left: %d\\n", content);
            time = rand() % 10;
            printf("Next packet will come at: %d\\n", time);

            for (clk = 0; clk < time && content > 0; ++clk) {
                printf("\\nLeft time: %d", (time - clk));
                sleep(1);

                if (content > 0) {
                    printf("\\nTransmitted\\n");
                    if (content < output_rate)
                        content = 0;
                    else
                        content -= output_rate;
                    printf("Bytes remaining: %d\\n", content);
                } else {
                    printf("\\nNo packets to send\\n");
                }
            }
        }
    }

    return 0;
}

`;


const LRC = `
#include <stdio.h>

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
    printf("Data with appended LRC (in binary):\\n");
    for (int i = 0; i < dataLength + 1; i++) {
        printBinary(dataToSend[i]);
        printf(" ");
    }
    printf("\\n");

    return 0;
}

`;

const CHKSUM = `
#include<stdio.h>
#include<math.h>

 int sender(int arr[10],int n)
{
int checksum,sum=0,i;
printf("\\n***SENDER SIDE*\\n");
for(i=0;i<n;i++)
sum+=arr[i];
printf("SUM IS: %d",sum);
checksum=~sum; //1's complement of sum
printf("\\nCHECKSUM IS:%d",checksum);
return checksum;
}
void receiver(int arr[10],int n,int sch)
{
int checksum,sum=0,i;
 printf("\\n\\n***RECEIVER SIDE*\\n");
 for(i=0;i<n;i++)
sum+=arr[i];
printf("SUM IS:%d",sum);
sum=sum+sch;
checksum=~sum; //1's complement of sum
printf("\\nCHECKSUM IS:%d",checksum);
}

void main()
{
 int n,sch,rch;
 printf("\\nENTER SIZE OF THE STRING:");
scanf("%d",&n);
 int arr[n];
 printf("ENTER THE ELEMENTS OF THE ARRAY TO CALCULATE CHECKSUM:\\n");
for(int i=0;i<n;i++)
{
 scanf("%d",&arr[i]);
}
 sch=sender(arr,n);
 receiver(arr,n,sch);
 }
`;


const CRC = `
#include<stdio.h>  
#include<string.h>  
// length of the generator polynomial  
#define N strlen(gen_poly)  
// data to be transmitted and received  
char data[28];  
// CRC value  
char check_value[28];  
// generator polynomial  
char gen_poly[10];  
// variables   
int data_length,i,j;  
// function that performs XOR operation  
void XOR(){  
    // if both bits are the same, the output is 0  
    // if the bits are different the output is 1  
    for(j = 1;j < N; j++)  
    check_value[j] = (( check_value[j] == gen_poly[j])?'0':'1');  
      
}  
// Function to check for errors on the receiver side  
void receiver(){  
// get the received data  
    printf("Enter the received data: ");  
    scanf("%s", data);  
    printf("\\n-----------------------------\\n");  
    printf("Data received: %s", data);  
// Cyclic Redundancy Check  
    crc();  
// Check if the remainder is zero to find the error  
    for(i=0;(i<N-1) && (check_value[i]!='1');i++);  
        if(i<N-1)  
            printf("\\nError detected\\n\\n");  
        else  
            printf("\\nNo error detected\\n\\n");  
}  
  
void crc(){  
    // initializing check_value  
    for(i=0;i<N;i++)  
        check_value[i]=data[i];  
    do{  
    // check if the first bit is 1 and calls XOR function  
        if(check_value[0]=='1')  
            XOR();  
// Move the bits by 1 position for the next computation  
        for(j=0;j<N-1;j++)  
            check_value[j]=check_value[j+1];  
        // appending a bit from data  
        check_value[j]=data[i++];  
    }while(i<=data_length+N-1);  
// loop until the data ends  
}  
  
int main()  
{  
    // get the data to be transmitted  
    printf("\\nEnter data to be transmitted: ");  
    scanf("%s",data);  
    printf("\\n Enter the Generating polynomial: ");  
    // get the generator polynomial  
    scanf("%s",gen_poly);  
    // find the length of data  
    data_length=strlen(data);  
    // appending n-1 zeros to the data  
    for(i=data_length;i<data_length+N-1;i++)  
        data[i]='0';  
    printf("\\n----------------------------------------");  
// print the data with padded zeros  
    printf("\\n Data padded with n-1 zeros : %s",data);  
    printf("\\n----------------------------------------");  
// Cyclic Redundancy Check  
    crc();  
// print the computed check value  
    printf("\\nCRC or Check value is : %s",check_value);  
// Append data with check_value(CRC)    
    for(i=data_length;i<data_length+N-1;i++)  
        data[i]=check_value[i-data_length];  
    printf("\\n----------------------------------------");  
// printing the final data to be sent  
    printf("\\n Final data to be sent : %s",data);  
    printf("\\n----------------------------------------\\n");  
// Calling the receiver function to check errors  
    receiver();  
        return 0;  
}

`;

const HAM = `
#include <stdio.h>
#include <math.h>
int input[32];
int code[32];
int ham_calc(int,int);
void main()
{
	int n,i,p_n = 0,c_l,j,k;
	printf("Please enter the length of the Data Word: ");
	scanf("%d",&n);
	printf("Please enter the Data Word:\\n");
	for(i=0;i<n;i++)
	{
		scanf("%d",&input[i]);
	}

	i=0;
	while(n>(int)pow(2,i)-(i+1))
	{
		p_n++;
		i++;
	}
		
	c_l = p_n + n;

	j=k=0;
	for(i=0;i<c_l;i++)
	{
		
		if(i==((int)pow(2,k)-1))
		{
			code[i]=0;
			k++;
		}
		else
		{
			code[i]=input[j];
			j++;
		}
	}
	for(i=0;i<p_n;i++)
	{
		int position = (int)pow(2,i);
		int value = ham_calc(position,c_l);
		code[position-1]=value;
	}
	printf("\\nThe calculated Code Word is: ");
	for(i=0;i<c_l;i++)
		printf("%d",code[i]);
	printf("\\n");
	printf("Please enter the received Code Word:\\n");
	for(i=0;i<c_l;i++)
		scanf("%d",&code[i]);

	int error_pos = 0;
	for(i=0;i<p_n;i++)
	{
		int position = (int)pow(2,i);
		int value = ham_calc(position,c_l);
		if(value != 0)
			error_pos+=position;
	}
	if(error_pos == 1)
		printf("The received Code Word is correct.\\n");
	else
		printf("Error at bit position: %d\\n",error_pos);
}
int ham_calc(int position,int c_l)
{
	int count=0,i,j;
	i=position-1;
	while(i<c_l)
	{
		for(j=i;j<i+position;j++)
		{
			if(code[j] == 1)
				count++;
		}
		i=i+2*position;
	}
	if(count%2 == 0)
		return 0;
	else
		return 1;
}

`;



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