#!/bin/bash
set -e
cd "$(dirname $BASH_SOURCE)"

# copy themes
themes_dir="src/assets/themes"
if [[ -d "$themes_dir" ]];then
    rm "$themes_dir" -rf
     mkdir "$themes_dir" -p
else
    mkdir "$themes_dir" -p
fi
themes=(
    bootstrap4-light-blue       bootstrap4-light-purple     bootstrap4-dark-blue    bootstrap4-dark-purple
    md-light-indigo     md-light-deeppurple     md-dark-indigo      md-dark-deeppurple
    mdc-light-indigo    mdc-light-deeppurple    mdc-dark-indigo     mdc-dark-deeppurple
    tailwind-light
    fluent-light
    lara-light-indigo   lara-dark-indigo    lara-light-purple   lara-dark-purple
    lara-light-blue     lara-dark-blue      lara-light-teal     lara-dark-teal
    saga-blue       saga-green      saga-orange     saga-purple
    vela-blue   vela-green    vela-orange     vela-purple
    arya-blue   arya-green      arya-orange     arya-purple
    nova    nova-alt    nova-accent
    luna-amber  luna-blue   luna-green  luna-pink
    rhea
)
for theme in ${themes[@]}
do
    src="node_modules/primeng/resources/themes/$theme"
    if [[ -d "$src" ]]; then
            cp "$src" "$themes_dir/$theme" -r
    else
        echo "not found theme: '$theme' at '$src'"
        exit 1
    fi
done


ng build --base-href /angular/primeflex
