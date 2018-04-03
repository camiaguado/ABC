# ABC - QA ASSESSMENT
Automation test framework using webdriver.io

## Getting started
### Prerequisites
 - You have installed [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
 
### Installation
#### Clone github repository
```bash
git clone https://github.com/camiaguado/ABC.git
```
#### Download dependencies
```bash
npm install
```
#### Run tests
```bash
npm test
```

### Diferents enviorments
- You could run JSONs tests in differents enviorments running this commands:
<table>
  <tr>
    <th>Enviorment</th><th>Command</th>
  </tr>
  <tr>
    <td>Test</td><td>npm test -- --env=test</td>
  </tr>
  <tr>
    <td>Production</td><td>npm test -- --env=prod</td>
  </tr>
  <tr>
    <td>Staging</td><td>npm test -- --env=stage</td>
  </tr>
</table>


### Multiple programs scenario
- What I would aply to solve this point is the TDD test strategy, you could install mocha-gherkin to do that.
  For example, in BDD the TDD is implemented with the keywords **Scenario Outline** outline and **Examples**.
  
  [![Preview](https://prnt.sc/izzz7t)](https://prnt.sc/izzz7t)
 
     Scenario Outline: Multiple programs 
            Given I have the server up and running
            When I access to the program "/programs/<programId>.json"
            Then I should see that is a program for <programType>

     Examples:
            | programId  | programType |
            | ppJj0E8g2R | Afternoons  |
            | ppxa2Amj2b | Mornings    |
            
            
            
            
   Here the test is going to run through each row in the table Examples.
