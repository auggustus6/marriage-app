

const openInitialScreen = async() => {
  await expect(element(by.text('Ainda não possui uma conta? Registre-se.'))).toBeVisible();
  await element(by.text('Ainda não possui uma conta? Registre-se.')).tap();
}

const fillFormSignUp = async() => {
  const textInputName = await element(by.id('input-name'));
  await textInputName.tap();
  await textInputName.typeText('Carlos Augusto');

  const textInputEmail = await element(by.id('input-email'));
  await textInputEmail.tap();
  await textInputEmail.typeText('auggustus6@gmail.com\n');

  const textInputPassword = await element(by.id('input-password'));
  await textInputPassword.tap();
  await textInputPassword.typeText('12345678\n');
  
  const textInputConfirm = await element(by.id('input-confirm'));
  await textInputConfirm.typeText('12345678\n');

  const buttonSubmit = await element(by.id('submit-button'));
  await buttonSubmit.tap();

}

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open first screen and sign up user', async () => {
    await openInitialScreen();
    await fillFormSignUp();
  });

});
