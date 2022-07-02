describe('Kiwi.com', () => {
  it('should visit the page and closing the Cookies modal', () => {
    cy.visit('https://www.kiwi.com/');
    cy.get('[data-test="ModalCloseButton"]').click();
  });

  it('should open the dropdown and select One-way', () => {
    // const button = cy.get('[data-test^="SearchFormModesPicker-active"] button');
    // button.click();

    const button = cy.get(
      '.ModesFieldstyled__ButtonWrap-sc-l4niwy-1 > .ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0 > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0'
    );

    button.should('have.text', 'Return');

    button.click();
    cy.get('[data-test="ModePopupOption-oneWay"]').click();

    button.should('have.text', 'One-way');
  });

  it('should open the dropdown and select Business', () => {
    const dropdown = cy.get(
      '[data-test="CabinClassField-active-economy"] > .Popover__StyledPopoverChild-sc-1n31v1j-0 > .ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0 > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0'
    );

    dropdown.should('have.text', 'Economy');

    dropdown.click();

    cy.get(
      '[data-test="CabinClassPicker-filter-business"] > .Radio__Label-sc-crlwn1-6 > .Radio__TextContainer-sc-crlwn1-2 > .Radio__LabelText-sc-crlwn1-4'
    ).click();

    cy.get('[data-test="CabinClassFooter-done"]').click();
    cy.get(
      '[data-test="CabinClassField-active-business"] > .Popover__StyledPopoverChild-sc-1n31v1j-0 > .ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0 > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0'
    ).should('have.text', 'BusinessBusiness');
  });
  //selectarea elementelor dupa data test nu este suficienta pentru a interactiona cu elementul. Event hendler-ul este pe copii elementului cu data test. Motiv pentru care am folosit selectorul din cypress care imi ia toata calea pana la element
  //la urmatorul deploy cel mai probabil clasele de css se vor modifica (ca denumire) iar testele nu vor mai functiona
});
