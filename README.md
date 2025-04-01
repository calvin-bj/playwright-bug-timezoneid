# playwright-bug-timezoneid

Repository to reproduce playwright timezoneId bug

# Prerequisites

Ensure deps are installed using `yarn` and `yarn playwright install`

# Reproduction steps

1. Set computer time zone to GMT, note down this time
2. Run `yarn playwright test`

_Expected_: Test prints out time in Sydney Time (based on timezoneId setting in the config)

_Actual_: Test prints out local time of the machine running the test
