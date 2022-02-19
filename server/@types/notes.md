for example if you do not have any type definitions for a library

simply create a file with the name of the library :

for example:
    library_name = shortid

    create a file named: shortid.d.ts
    and write declare module "shortid"; this will resolve the problem

you should do this in this folder(directory) -> you can also declare the types