
<div class="card">
    <h5>Advanced</h5>
    <div class="formgrid grid">
        <div class="field col-12 md:col-6">
            <label for="firstname6">Firstname</label>
            <input id="firstname6" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field col-12 md:col-6">
            <label for="lastname6">Lastname</label>
            <input id="lastname6" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field col-12">
            <label for="address">Address</label>
            <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
        </div>
        <div class="field col-12 md:col-6">
            <label for="city">City</label>
            <input id="city" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <div class="field col-12 md:col-3">
            <label for="state">State</label>
            <select id="state" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style="appearance: auto">
                <option>Arizona</option>
                <option>California</option>
                <option>Florida</option>
                <option>Ohio</option>
                <option>Washington</option>
            </select>
        </div>
        <div class="field col-12 md:col-3">
            <label for="zip">Zip</label>
            <input id="zip" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
        </div>
        <button type="button" class="text-white bg primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Submit</button>
    </div>
</div>

