const { browser } = require("protractor");

var EC = protractor.ExpectedConditions;
var isClickable = EC.elementToBeClickable;


describe('Validate search functionality', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
      });
  
      afterAll(function () {
          console.log('\n' + 'Execution completed for the above testcase' + '\n');
      });

      
    it('Launch Powershare web app', function() {
      //Navigate to powershare url
      //browser.manage().window().maximize();
      browser.get('https://nps.dev.nuancepowershare.com/smr/');
      expect(browser.getTitle()).toEqual('Nuance PowerShare');
      //browser.sleep(5000);

  
    });

    it('Login to Powershare', function() {
        

    // var condition = EC.and(txtUsername, isClickable);
    // browser.wait(condition, 5000); //wait for condition to be true.

      element(by.name('username')).sendKeys('BTphysician01@gmail.com');
      element(by.name('password')).sendKeys('Admin@123');
      element(by.name('form.login.login')).click();
      //browser.sleep(5000);

    });
     
    it('Navigate to Contacts page', function() {
        
      //browser.wait(EC.elementToBeClickable($("//a[text()='Contacts']")), 5000);
      element(by.linkText('Contacts')).click();
      

    });

    it('Navigate to Images page', function() {
        
      //browser.wait(EC.elementToBeClickable($("//a[text()='Images']")), 5000);
      element(by.linkText('Images')).click();
      

    });


    it('Navigate to Messages page', function() {
        
      //browser.wait(EC.elementToBeClickable($("//a[text()='Messages']")), 5000);
      element(by.linkText('Messages')).click();
      

    });



    
    // it('Validate Search functionality 1', function() {
        
    
    //      element(by.id('search-field')).sendKeys('2613243');
    //      element(by.css('a.btn-search')).sendKeys(protractor.Key.ENTER)
    //      var itemPresence = element(by.xpath("//a[@itemprop and contains(@href,'2613243')]"));
    //      expect(itemPresence.isPresent()).toBe(true);

    //   });

    //   it('Validate Search functionality 2', function() {
        
    
    //     element(by.id('search-field')).sendKeys('123456');
    //     element(by.css('a.btn-search')).sendKeys(protractor.Key.ENTER)
    //     var itemPresence = element(by.css("li.message"));
    //     browser.wait(EC.presenceOf(itemPresence, 5000));
    //     expect(itemPresence.getAttribute('textContent')).toContain('We are unable to recognize the catalog quick shop number you entered');
 
    //  });


  });


  // describe('Verify Store locator functionality', function() {
  //   beforeAll(function() {
  //       browser.ignoreSynchronization = true;
  //     });
  
  //     afterAll(function () {
  //         console.log('\n' + 'Execution completed for the above testcase' + '\n');
  //     });

      
  //   it('Launch Westlem.com', function() {
        
  //     browser.get('https://www.westelm.com');
    
  
  //   });

  //   it('Verify selecting Arizona State  from State dropdown menu gives  2 store result', function() {
        
        
  //       element(by.css('ul#stores-link a.c-account-nav__link')).click();
  //       element(by.css('a.c-store-locator__map-search-toggle-link')).isPresent().then(function(toggle){
  //           element(by.css('a.c-store-locator__map-search-toggle-link')).click();
    
  //           });
  //       //browser.wait(EC.presenceOf(element(by.xpath("//div[@class='c-store-locator__map-map-loader-inner js-map-loader' and @style='display: none;']"))),10000)
  //       var lstState = element(by.css('select#state-list-selector'));
  //       browser.wait(EC.presenceOf(lstState, 30000));
  //       element(by.css("select#state-list-selector option[name='AZ']")).click();
  //       var stores = element.all(by.xpath("//div[@class='c-store-locator__directory-tab-content-header']/following-sibling::div//h2"));
  //       expect(stores.count()).toEqual(2);
   

  //     });

  //     it('Verify selecting Texas State  from State dropdown menu gives  8 store results', function() {
        
    
  //       element(by.css('ul#stores-link a.c-account-nav__link')).click();
  //       element(by.css('a.c-store-locator__map-search-toggle-link')).isPresent().then(function(toggle){
  //           element(by.css('a.c-store-locator__map-search-toggle-link')).click();
    
  //           });
  //       //browser.wait(EC.presenceOf(element(by.xpath("//div[@class='c-store-locator__map-map-loader-inner js-map-loader' and @style='display: none;']"))),10000)
  //       var lstState = element(by.css('select#state-list-selector'));
  //       browser.wait(EC.presenceOf(lstState, 30000));
  //       element(by.css("select#state-list-selector option[name='TX']")).click();
  //       var stores = element.all(by.xpath("//div[@class='c-store-locator__directory-tab-content-header']/following-sibling::div//h2"));
  //       expect(stores.count()).toEqual(8);
  
  //    });


  // });
