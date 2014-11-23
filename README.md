ellipsis-animated
=================

An animated loading ellipsis.

Dependency-free, but can be used with AngularJS.


Usage
-----

With Angular:

    <p>
        Loading<ellipsis-animated />
    </p>

Without Angular:

    <p>
        Loading<span class="ellipsis_animated-inner">
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </span>
    </p>


Contribute
----------

- Issue Tracker: github.com/bodylabs/ellipsis-animated/issues
- Source Code: github.com/bodylabs/ellipsis-animated

Pull requests welcome!


Developer notes
---------------

The rake folder and package-base.json hook into some internal
tools. External adopters should ignore them.


License
-------

The project is licensed under the two-clause BSD license.
