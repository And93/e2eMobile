adb devices | find "emulator" && (
adb -s emulator-5554 emu kill
) || (
echo Emulator is not running
)

tasklist /nh /fi "imagename eq qemu-system*" | find /i "qemu-system" && (
taskkill /f /im qemu-system*
) || (
echo Process 'qemu-system' is not running
)

tasklist /nh /fi "imagename eq emulator*" | find /i "emulator" && (
taskkill /f /im emulator*
) || (
echo Emulator is not running
)

tasklist /nh /fi "imagename eq adb*" | find /i "adb" && (
adb kill-server
) || (
echo Adb-server is not running
)

exit 0