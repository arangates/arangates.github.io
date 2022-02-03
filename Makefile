.PHONY: pdf

CC = xelatex
SRC_DIR = pdf
PUBLIC_DIR = public
RESUME_DIR = pdf/sections
RESUME_SRCS = $(shell find $(RESUME_DIR) -name '*.tex')

pdf: $(foreach x, coverletter resume, $x.pdf)

resume.pdf: $(SRC_DIR)/resume.tex $(RESUME_SRCS)
	$(CC) -output-directory=$(PUBLIC_DIR) $<

coverletter.pdf: $(SRC_DIR)/coverletter.tex
	$(CC) -output-directory=$(PUBLIC_DIR) $<

clean:
	rm -rf $(SRC_DIR)/*.pdf
