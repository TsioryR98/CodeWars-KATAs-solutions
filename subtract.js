/*Test.assertEquals(subtract("2" ,"0"), "2");
Test.assertEquals(subtract("0", "30"), "-30");
Test.assertEquals(subtract("0000001", "3"), "-2");
Test.assertEquals(subtract("1009", "03"), "1006");
Test.assertEquals(subtract("234", "242"), "-8");
Test.assertEquals(subtract("294", "334"), "-40");
    Test.assertEquals(subtract("98765", "56894"), "41871");
    Test.assertEquals(subtract("1020303004875647366210", "2774537626200857473632627613"), "-2774536605897852597985261403");
    Test.assertEquals(subtract("58608473622772837728372827", "7586374672263726736374"), "58600887248100574001636453");
    Test.assertEquals(subtract("9007199254740991", "9007199254740991"), "0");
*/

function subtract(a,b) {
    let number1 = Number(a);
    let number2 = Number(b);
    let subtracts = number1 - number2;
    return subtracts.toString();
}

console.log(subtract("000000294", "334"))
console.log(typeof(subtract("2" ,"0")))