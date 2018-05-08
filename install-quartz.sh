#!/bin/bash

git clone https://github.com/XQuartz/quartz-wm.git
cd quartz-wm
ACLOCAL="aclocal -I /opt/X11/share/aclocal" autoreconf -fvi
PKG_CONFIG_PATH=/opt/X11/share/pkgconfig:/opt/X11/lib/pkgconfig ./configure --prefix=/opt/X11
make
