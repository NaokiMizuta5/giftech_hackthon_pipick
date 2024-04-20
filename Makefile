.PHONY: clean install clean-install

clean:
	rm -rf node_modules

install:
	bun install --frozen-lockfile

clean-install: clean install
