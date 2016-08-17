```html
<form>
  <div class="row">
    <div class="col-xs-12">
      <label class="label">
        Email address
        <input type="text" class="input input--text" value="amelia.lewis@wgsn.com" placeholder="Email">
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <label class="label">
        Password
        <input type="password" class="input input--password" placeholder="Keep it secret.">
      </label>
    </div>

    <div class="col-xs-12 col-sm-6">
      <label class="label">
        Confirm password
        <input type="password" class="input input--password" placeholder="Keep it safe.">
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <label class="label">
        Disabled field
        <input type="text" class="input input--text" placeholder="This is disabled." disabled>
      </label>
    </div>

    <div class="col-xs-12 col-sm-6">
      <label class="label">
        Text area
        <textarea class="input input--textarea">Edit me, yo.</textarea>
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-4">
      <label class="label">
        First name
        <span class="input--error-message">(Required)</span>
        <input type="text" class="input input--text input--has-error">
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <label class="label">
        Last name
        <input type="text" class="input input--text input--is-valid" placeholder="Lewis">
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <label class="label label--dropdown">
        Country
        <select class="input input--dropdown">
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Australia</option>
        </select>
      </label>
    </div>
  </div>
  
  <div class="row">
    <div class="col-xs-12 col-sm-4">
      <label class="label label--checkbox-radio" for="checkbox-1">
        <input type="checkbox" class="input input--checkbox" id="checkbox-1" checked>
        Checkbox 1
      </label>

      <label class="label label--checkbox-radio" for="checkbox-2">
        <input type="checkbox" class="input input--checkbox" id="checkbox-2">
        Checkbox 2
      </label>

      <label class="label label--checkbox-radio" for="checkbox-3">
        <input type="checkbox" class="input input--checkbox" id="checkbox-3" disabled>
        Checkbox 3 (disabled)
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <label class="label label--checkbox-radio" for="checkbox-1">
        <input type="radio" class="input input--radio" name="radio-example" id="radio-1" checked>
        Radio 1
      </label>

      <label class="label label--checkbox-radio" for="checkbox-2">
        <input type="radio" class="input input--radio" name="radio-example" id="radio-2">
        Radio 2
      </label>

      <label class="label label--checkbox-radio" for="checkbox-3">
        <input type="radio" class="input input--radio" name="radio-example" id="radio-3" disabled>
        Radio 3 (disabled)
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <div class="input--toggle input--toggle-on"></div>
    </div>
  </div>
</form>
```