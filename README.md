# Purchasing-Orders-Follow-Up-System
Purchasing Orders Follow-Up System for registering of the PO and their follow up until delivery to customers

## Deployed Project
Please visit it at https://nicolaskennof.github.io/PO-Boss/

## PTT Presentation
[Link to PTT Presentation](https://docs.google.com/presentation/d/1tLMjteb4qp60cTpJ9WEAurfOwgx-qxMX1uiCRd6iFpY/edit)

## Descrption of the problem
From the moment the POs from identified customers arrive in the mailbox and the moment the order actually get to the customers, there is a whole lot of probabilities that they will be lost if not centralized from the beginning until the end on a follow-up platform.

## How we solved the problem
We solved the problem by creating a bootstrap platform where the entered PO information is centralized to a Firebase database. By doing so, we ensure all involved people will see the same information independently from the device and the device type.

We integarted some usefull charts so that having a quickly understable overview is made easy.

## Technical approach
Realtime Firebase database in order to push the data in real time in index.html.
Charts.js for the creation and update of the charts.
Javascript based with AJAX calls to JASON API's.
We decided to split the different features into different JAVACRIPT files so that each member can easily update its branch with specific features.

## Firebase Authentication Notes
**Steps**

1. Create the Firebase Project [PurchasingOrdersFO]
2. Create the RealTime Database in the Project with the same Name [PurchasingOrdersFO] `Enable test-mode`. [https://purchasingordersfo.firebaseio.com/](https://purchasingordersfo.firebaseio.com/)
3. Add Initialize Code in JavaScript app.
4. Enable Authoriaztion with email.

## Authorization Notes
1. Add Event Listener to the Login Button

[Youtube Tutorial Video](https://youtu.be/-OKrloDzGpU)

```javascript
// Important Methods
const auth = firebase.auth();
const promise = auth.signInWithEmailAndPassword(email, password);

const auth = firebase.auth();
const promise = auth.createUserWithEmailAndPassword(email, password);

// Authentication Real-Time Listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser);
    }
    else{
        console.log("Not Logged In");
    }
});

firebase.auth().signOut();

```

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

# GIT NOTES
## Create a New Branch
1. Fetch the master Branch [Update the Branch Information of the Repository What New Branches Appear]
2. Pull the latest updates of the Repository
3. Create a new Branch.
4. List the Local Branches.
5. Work on the Branch (Make Changes).
6. Check Status of the Branch.
7. Stage Changes (Add them to the stage Area).
8. Commit changes.
9. Push New Branch Changes to the Remote Repository.


```bash
git fetch
git pull
git checkout -b [New-Branch]
git branch

touch new-file-text.txt

git status
git add -A
git commit -m "Branch Update"

git push --set-upstream origin [New-Branch]
```

## Pull a Different Branch From Remote Repository.
1. Fetch the master Branch [Update the Branch Information of the Repository What New Branches Appear]
2. Pull the latest updates of the Repository.
3. List the Remote Branches
4. Select the Remote Branch and checkout over it.

> Make sure to type the just the name of the branch without location path.
> i.e:
```bash
seijix@MacBookProX Purchasing-Orders-Follow-Up-System (master) $ git branch -va
  add-html-skeleton                50837d5 index.html
  codeStart                        fa9080d Fixed Modal
* master                           1ae77ef Merge pull request #17 from nicolaskennof/codeStart
  seiji-branch                     d5c30c6 Test
  remotes/origin/HEAD              -> origin/master
  remotes/origin/add-html-skeleton 50837d5 index.html
  remotes/origin/ana-branch        670dec6 test for anas branch
  remotes/origin/codeStart         fa9080d Fixed Modal
  remotes/origin/egomezmo          1ae77ef Merge pull request #17 from nicolaskennof/codeStart
  remotes/origin/master            1ae77ef Merge pull request #17 from nicolaskennof/codeStart
  remotes/origin/nicolas-branch    0a93df0 test Nico
  remotes/origin/seiji-branch      d5c30c6 Test

seijix@MacBookProX Purchasing-Orders-Follow-Up-System (master) $ git checkout nicolas-branch
```

```bash
git fetch
git pull
git branch -va

git checkout [remote_branch]

```
