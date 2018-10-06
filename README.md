# Purchasing-Orders-Follow-Up-System
Purchasing Orders Follow-Up System for registering of the PO and their follow up until delivery to customers


## Firebase Authentication Notes
**Steps**

1. Create the Firebase Project [PurchasingOrdersFO]
2. Create the RealTime Database in the Project with the same Name [PurchasingOrdersFO] `Enable test-mode`. [https://purchasingordersfo.firebaseio.com/](https://purchasingordersfo.firebaseio.com/)
3. Add Initialize Code in JavaScript app.
4. Enable Authoriaztion with email.

## Authorization Notes
1. Add Event Listener to the Login Button

[Youtube Tutorial Video](https://youtu.be/-OKrloDzGpU)

## Navbar Notes
[Youtube Tutorial Reference](https://youtu.be/23bpce-5s8I)

``` html
nav.navbar.navbar-expand-md
    
    a.navbar-brand

    button.navbar-toggler [data-toggle="collapse" data-target="#navbar-menu"]
        <span class="navbar-toggler-icon"></span>

    .navbar-collapse collapse
        ul.navbar-nav.ml-auto#navbar-menu
            li.nav-item
                a.nav-link
            li.nav-item
                a.nav-link

```

## Modal Notes

[Youtube Tutorial Reference](https://www.youtube.com/watch?v=N3RK2dZpQXs&t=743s)

```html
<!-- This is a Reference of the Construction of the Add PO Modal -->

<!-- Modal Trigger Button-->
button [data-toggle="modal" data-target="#add-po-modal"]

<!-- Modal "#add-po-modal" Structure -->
.modal.fade#add-po-modal
    .modal-dialog
        .modal-content
            .modal-header
                h2.modal-title
                button.close [data-dismiss="modal"]
        .modal-body
            form
        .modal-footer
            button.submit [data-dismiss="modal"]
```

``` html
<!-- This button is binded to the Modal #add-po-modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-po-modal">Add PO</button>

<!-- Modal Add PO -->
    <div class="modal fade" id="add-po-modal">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h2 class="modal-title">Add Purchase Order</h2>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form action="">
              
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Add Purchase Order
            </button>
          </div>
        </div>
      </div>
    </div>
```

## Form Notes
### Form Elements
```html
<!--
Form Text Input Element Template
    <div class="form-group">
    <label for=""></label>
    <input type="text" class="form-control form-control-sm" id="" placeholder="">
    </div>
-->
```