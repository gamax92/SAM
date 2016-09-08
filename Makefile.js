OBJS = reciter.o sam.o render.o nodebug.o

CC = emcc

CFLAGS = -Wall -O3 --memory-init-file 0 -s EXPORTED_FUNCTIONS="['_TextToPhonemes','_SetInput','_SAMMain','_GetBufferLength','_GetBuffer','_SetSpeed','_SetPitch','_SetMouth','_SetThroat','_SetSingMode']"

sam.js: $(OBJS)
	$(CC) -o sam.js $(OBJS) $(CFLAGS)

%.o: src/%.c
	$(CC) $(CFLAGS) -c $<

clean:
	rm *.o
