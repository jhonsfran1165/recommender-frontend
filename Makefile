###############################################################################
### Tasks
###############################################################################
all: start-cypress

.PHONY: start-cypress
start-cypress:
	@xhost local:root
	@docker-compose up -d

.PHONY: stop-cypress
stop-cypress:
	@docker-compose down

###############################################################################
### Dynamically list all targets.
### See: https://stackoverflow.com/a/26339924
###############################################################################
.PHONY: list
list:
	@$(MAKE) -pRrq -f $(MAKEFILE_LIST) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs -n 1
