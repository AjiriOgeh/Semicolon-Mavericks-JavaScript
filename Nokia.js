const prompt = require('prompt-sync')();

function displayMenu() {
    return `
1. PhoneBook
2. Messages
3. Chat
4. Call register
5. Tones
6. Settings
7. Call divert
8. Games
9. Calculator
10. Reminders
11. Clock
12. Profiles
13. SIM services`
}

function displayPhoneBooKMenu() {
    return `
1. Search
2. Service Nos
3. Add name
4. Erase
5. Edit
6. Assign tone
7. Send b'card
8. Options
9. Speed dials
10. Voice tags`
}

function displayOptionsMenu() {
    return `
1. Type of view
2. Memmory Status`
}

function displayMessagesMenu() {
    return `
1. Write messages
2. Inbox
3. Outbox
4. Pictures messages
5. Templates
6. Smileys
7. Message settings
8. Info serivce
9. Voice mailbox number
10. Service command editor`
}

function displayMessagesSettingsMenu() {
    return `
1. Set
2. Common`
}

function displaySetMenu() {
    return `
1. Messages centre number
2. Messages sent as
3. Message validity`
}

function displayCommonMenu() {
    return `
1. Delivery reports
2. Reply via same centre
3. Character support`
}

function displayChatMenu() {
    return `
1. Chat`
}

function displayCallRegisterMenu() {
    return `
1. Missed calls
2. Received calls
3. Dialled numbers
4. Erase recent call lists
5. Show call duration
6. Show call costs
7. Call cost settings
8. Prepaid credit`
}

function displayShowCallDurationMenu() {
    return `
1. Last call duration
2. All calls' duration
3. Received calls' duration
4. Dialled calls' duration
5. Clear timers`
}

function displayShowCallCostsMenu() {
    return `
1. Last call cost
2. All calls' cost
3. Clear counters`
}

function displayCallCostSettingsMenu() {
    return `
1. Call cost limit
2. Show costs in`
}

function displayTonesMenu() {
    return `
1. Ringing tone
2. Ringing volume
3. Incoming call alert
4. Composer
5. Message alert tone
6. Keypad tones
7. Warning and game tones
8. Vibrating alert
9. Screen saver`
}

function displaySettingsMenu() {
    return ` 
1. Call settings
2. Phone settings
3. Security settings
4. Restore factory settings`
}

function displayCallSettingsMenu() {
    return `
1. Automatic redial
2. Speed dialling
3. Call waiting options
4. Own number sending
5. Phone line in use
6. Automatic answer`
}

function displayPhoneSettingsMenu() {
    return `
1. Language
2. Cell info display
3. Welcome note
4. Network selection
5. Lights
6. Confirm SIM service actions`
}

function displaySecuritySettingsMenu(){
    return ` 
1. Pin code request 
2. Call barring service
3. Fixed dialling
4. Closed user group
5. Phone sercurity
6. Change access codes`
}

function displayCallDivertMenu() {
    return `
1. Call divert`
}

function displayGamesMenu() {
    return `
1. Games`
}

function displayCalculatorMenu() {
    return `
1. Calculator`
}

function displayRemindersMenu() {
    return `
1. Reminders`
}

function displayClockMenu() {
    return `
1. Alarm Clock
2. Clock settings
3. Date setting
4. Stopwatch
5. Countdown timer
6. Auto update of date and time`
}

function displayProfilesMenu() {
    return `
1. Profiles`
}

function displaySIMServices() {
    return `
1. SIM services`
}

console.log(displayMenu());
let menu = prompt("Select an option: ");

switch(menu) {
    case "1":
        console.log(displayPhoneBooKMenu());
        let phoneBookMenu = prompt("Select an option: ");

        switch(phoneBookMenu) {
            case "1":
                console.log("Search")
                break;
            case "2":
                console.log("Service nos")
                break;
            case "3":
                console.log("Add name")
                break;
            case "4":
                console.log("Erase")
                break;
            case "5":
                console.log("Edit")
                break;
            case "6":
                console.log("Assing tone")
                break;
            case "7":
                console.log("Send b'card")
                break;
            case "8":
                console.log(displayOptionsMenu())
                let optionsMenu = prompt("Select an option: ");

                switch(optionsMenu) {
                    case "1":
                        console.log("Type of view")
                        break;
                    case "2":
                        console.log("Memory status")
                        break;
                }
                break;
            case "9":
                console.log("Speed dials")
                break;
            case "10":
                console.log("Voice tags")
                break;
        }
        break;
    
    case "2":
        console.log(displayMessagesMenu());
        let messagesMenu = prompt("Select an option: ");

        switch(messagesMenu) {
            case "1":
                console.log("Write messages")
                break;
            case "2":
                console.log("Inbox")
                break;
            case "3":
                console.log("Outbox")
                break;
            case "4":
                console.log("Pictures messages")
                break;
            case "5":
                console.log("Templates")
                break;
            case "6":
                console.log("Smileys")
                break;
            case "7":
                console.log(displayMessagesSettingsMenu());
                let messageSettingMenu = prompt("Select an option: ");

                switch(messageSettingMenu){
                    case "1":
                        console.log(displaySetMenu());
                        let setMenu = prompt("Select an option: ")
                        
                        switch(setMenu) {
                            case "1":
                                console.log("Message centre number");
                                break;
                            case "2":
                                console.log("Messages sent as")
                                break;
                            case "3":
                                console.log("Message validity")
                                break;
                        }
                        break
                    case "2":
                        console.log(displayCommonMenu());
                        let commonMenu = prompt("Select an option: ");

                        switch(commonMenu) {
                            case "1":
                                console.log("Delivery reports");
                                break;
                            case "2":
                                console.log("Reply via same centre");
                                break;
                            case "3":
                                console.log("Character support")
                                break;
                        }
                        break;
                }
                break;
            case "8":
                console.log("Info service")
                break;
            case "9":
                console.log("Voice mailbox number")
                break;
            case "10":
                console.log("Serice command editor")
                break;

        }
        break;
    
    case "3":
        console.log(displayChatMenu())
        let chatMenu = prompt("Select an option: ")

        switch(chatMenu) {
            case "1":
                console.log("Chat")
                break;
        }
    
    case "4":
        console.log(displayCallRegisterMenu())
        let callRegisterMenu = prompt("Select an option: ")

        switch(callRegisterMenu) {
            case "1":
                console.log("Missed calls");
                break;
            case "2":
                console.log("Received calls");
                break;
            case "3":
                console.log("Dialled numbers");
                break;
            case "4":
                console.log("Erase recent call lists");
                break;
            case "5":
                console.log(displayShowCallDurationMenu())
                let showCallDurationMenu = prompt("Select an option: ")

                switch(showCallDurationMenu){
                    case "1":
                        console.log("Last call duration")
                        break;
                    case "2":
                        console.log("All calls' duration")
                        break;
                    case "3":
                        console.log("Received calls' duration")
                        break;
                    case "4":
                        console.log("Dialled calls' duration")
                        break;
                    case "5":
                        console.log("Clear timers")
                        break;
                }
                break;
            case "6":
                console.log(displayShowCallCostsMenu())
                let showCallCostMenu = prompt("Select an option: ")
                
                switch(showCallCostMenu){
                    case "1":
                        console.log("Last call cost")
                        break;
                    case "2":
                        console.log("All calls' cost")
                        break;
                    case "3":
                        console.log("Clear counters")
                        break;                    
                }
                break;
            case "7":
                console.log(displayCallCostSettingsMenu())
                let callCostSettingsMenu = prompt("Select an option: ")
                
                switch(callCostSettingsMenu){
                    case "1":
                        console.log("Call cost limit")
                        break;
                    case "2":
                        console.log("Show costs in")
                        break;             
                }
                break;
            case "8":
                console.log("Prepaid credit")
                break;
        }
        break;
    
    case "5":
        console.log(displayTonesMenu());
        let tonesMenu = prompt("Select an option: ");

        switch(tonesMenu) {
            case "1":
                console.log("Ringing tone")
                break;
            case "2":
                console.log("Ringing volume")
                break;
            case "3":
                console.log("Incoming call alert")
                break;
            case "4":
                console.log("Composer")
                break;
            case "5":
                console.log("Message alert tone")
                break;
            case "6":
                console.log("Keypad tones")
                break;
            case "7":
                console.log("Warming and game tones")
                break;
            case "8":
                console.log("Vibrating alert")
                break;
            case "9":
                console.log("Screen saver")
                break;
        }
        break;
    
    case "6":
        console.log(displaySettingsMenu())
        let settingsMenu = prompt("Select an option: ")

        switch(settingsMenu) {
            case "1":
                console.log(displayCallSettingsMenu());
                let callSettingsMenu = prompt("Select an option: ")

                switch(callSettingsMenu) {
                    case "1":
                        console.log("Automatic redial")
                        break;
                    case "2":
                        console.log("Speed Dialling")
                        break;
                    case "3":
                        console.log("Call waiting options")
                        break;
                    case "4":
                        console.log("Own number sending")
                        break;
                    case "5":
                        console.log("Phone line in use")
                        break;
                    case "6":
                        console.log("Automatic answer")
                        break;
                }
                break;
            case "2":
                console.log(displayPhoneSettingsMenu());
                let phoneSettingsMenu = prompt("Select an option: ")

                switch(phoneSettingsMenu) {
                    case "1":
                        console.log("Language")
                        break;
                    case "2":
                        console.log("Cell info display")
                        break;
                    case "3":
                        console.log("Welcome note")
                        break;
                    case "4":
                        console.log("Network selection")
                        break;
                    case "5":
                        console.log("Lights")
                        break;
                    case "6":
                        console.log("Confirm SIM service actions")
                        break;
                }
                break;
            case "3":
                console.log(displaySecuritySettingsMenu());
                let securitySettingsMenu = prompt("Select an option: ")

                switch(securitySettingsMenu) {
                    case "1":
                        console.log("PIN code request")
                        break;
                    case "2":
                        console.log("Call barring service")
                        break;
                    case "3":
                        console.log("Fixed dialling")
                        break;
                    case "4":
                        console.log("Closed user group")
                        break;
                    case "5":
                        console.log("Phone security")
                        break;
                    case "6":
                        console.log("Change access codes")
                        break;
                }
                break;
            case "4":
                console.log("Restore factory settings");
                break;
        }
        break;
    
    case "7":
        console.log(displayCallDivertMenu())
        let callDivertMenu = prompt("Select an option: ")

        switch(callDivertMenu) {
            case "1":
                console.log("Call Divert")
                break;
        }
        break;
    
    case "8":
        console.log(displayGamesMenu())
        let gamesMenu = prompt("Select an option: ")

        switch(gamesMenu) {
            case "1":
                console.log("Games")
                break;
        }
        break;

    case "9":
        console.log(displayCalculatorMenu())
        let calculatorMenu = prompt("Select an option: ")

        switch(calculatorMenu) {
            case "1":
                console.log("Calculator")
                break;
        }
        break;
    
    case "10":
        console.log(displayRemindersMenu())
        let remindersMenu = prompt("Select an option: ");

        switch(remindersMenu) {
            case "1":
                console.log("Reminders");
                break;
        }
        break;

    case "11":
        console.log(displayClockMenu())
        let clockMenu = prompt("Select an option: ")

        switch(clockMenu) {
            case "1":
                console.log("Alarm clock");
                break;
            case "2":
                console.log("Clock settings");
                break;
            case "3":
                console.log("Date setting");
                break;
            case "4":
                console.log("Stopwatch")
                break;
            case "5":
                console.log("Countdown timer");
                break;
            case "6":
                console.log("Auto update of date and time")
                break;
        }
        break;

    case "12":
        console.log(displayProfilesMenu());
        let profilesMenu = prompt("Select an option: ");

        switch(profilesMenu) {
            case "1":
                console.log("Profiles");
                break;
        }
        break;

    case "13":
        console.log(displaySIMServices());
        let simServicesMenu = prompt("Select an option: ");

        switch(simServicesMenu) {
            case "1":
                console.log("SIM services");
                break;
        }
        break;

}
