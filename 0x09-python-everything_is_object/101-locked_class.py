#!/usr/bin/python3
# 101-locked_class.py
"""Defines a locked class."""


class LockedClass:
    """
    the user from instantiating new Lockedclass attributes
    for anything but attributes called 'first_name'
    """

    __slots__ = ["first_name"]
