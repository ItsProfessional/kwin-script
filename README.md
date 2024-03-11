# kwin-scripts
My KWin scripts for KDE Plasma 6

## Installation

* Ensure you have `git` installed.

* Clone the repository.
```sh
$ git clone https://github.com/ItsProfessional/kwin-scripts
$ cd kwin-scripts
```

* Install the scripts you want
```sh
$ kpackagetool6 --type=KWin/Script -i <name-of-script>
```

* Enable the scripts, either from the system settings page or with the kwriteconfig5 tool:
```sh
$ kwriteconfig5 --file kwinrc --group Plugins --key <name-of-script>Enabled true
$ qdbus org.kde.KWin /KWin reconfigure
```
