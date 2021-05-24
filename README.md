# Introduction

This project is an example of hexagonale architecture, with angular. It's a POC used as a showcase to present the advantages of such an architecture.

All the business rules are in the domain folder, without any use of any framework. A port is present in `/domain/ports`. This interface is implemented in the angular project, and injected in components who need it.

The business rules are full tested in jest (written in TDD), so we can be confident on what we want.
It presents a very simple set of usecases, where a client request for a taxi by calling a call center. The taxi then drive her client where she wants to go, and notify the call center when the client paid the bill. The call center registers it in an account book (the port), implemented as a simple console.log() in the angular service.


## Run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/fr/).

The builder is configured so you can run `ng test` and see jest running. It's also an example of how to install jest easily with the last version of angular ([Documentation](https://sybrenbolandit.nl/2020/02/04/angular-with-jest/))  

## Discussions and contributing

Don't hesitate to send a mail at [alexandre.decollas.pro@gmail.com](mailto:alexandre.decollas.pro@gmail.com) so you can make some remarks, or contrinute to the project by submitting a pull request.
