```html
<form>
  <div class="row">
    <div class="col-xs-12">
      <label>
        Email address
        <input type="text" placeholder="amelia.lewis@wgsn.com">
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <label>
        Password
        <input type="password" placeholder="Keep it secret.">
      </label>
    </div>

    <div class="col-xs-12 col-sm-6">
      <label>
        Confirm password
        <input type="password" placeholder="Keep it safe.">
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <label>
        Disabled field
        <input type="text" placeholder="This is disabled." disabled>
      </label>
    </div>

    <div class="col-xs-12 col-sm-6">
      <label>
        Text area
        <textarea>Edit me, yo.</textarea>
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-4">
      <label>
        First name
        <span class="error-message">(Required)</span>
        <input type="text" class="has-error">
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <label>
        Last name
        <input type="text" placeholder="Lewis" class="is-valid">
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <label>
        Country
        <select>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Australia</option>
        </select>
      </label>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <input type="text" class="search-input" placeholder="Search Image Library">
    </div>

    <div class="col-xs-12 col-sm-6">
      <textarea class="comment-input" placeholder="Enter your comment"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-4">
      <label class="checkbox-radio" for="checkbox-1">
        <input type="checkbox" id="checkbox-1" checked>
        Checkbox 1
      </label>

      <label class="checkbox-radio" for="checkbox-2">
        <input type="checkbox" id="checkbox-2">
        Checkbox 2
      </label>

      <label class="checkbox-radio" for="checkbox-3">
        <input type="checkbox" id="checkbox-3" disabled>
        Checkbox 3 (disabled)
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <label class="checkbox-radio" for="checkbox-1">
        <input type="radio" name="radio-example" id="radio-1" checked>
        Radio 1
      </label>

      <label class="checkbox-radio" for="checkbox-2">
        <input type="radio" name="radio-example" id="radio-2">
        Radio 2
      </label>

      <label class="checkbox-radio" for="checkbox-3">
        <input type="radio" name="radio-example" id="radio-3" disabled>
        Radio 3 (disabled)
      </label>
    </div>

    <div class="col-xs-12 col-sm-4">
      <div class="toggle toggle-on"></div>
    </div>
  </div>
</form>
```