## Todd's Focus Questions:
- _What is Git?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is the Difference between func and func()?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is a Repository or “Repo”?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is the difference between a Parameter and an Argument/ how are the related?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is the difference between local and global scope?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>

## Git is... 
- pre-code structure
- "version control"
- a tool used to save multiple forms of the same code 
- allows us to rollback (aka return to OG code if something gets ~~fucked~~ super messed up) and git shame others

## Three Stages in Git:
1) untracked - not available to be pushed up to Git
2) staged - unsafe position to leave your code in
3) committed - unlikely to be deleted

## Creating a Repository on Github
- Initialize a git in the root of the repo you'd like to upload
    - `git init`
- If you have an existing git that you would like to add to, copy and paste into command line
    - `git remote add origin https://github.com/user/repo.git`
- Now push the staged changes into github
    - `git add .`
    - `git push -u origin master` 
    + change 'master' to whichever branch you want to push to

## Inviting Collaborators 
- Can be done on the GitHub site instead of command line. 
- YourRepo > Settings > Collaborators

## Pushing/Committing Changes
- Set the stage for your changes
    - `git add .`
- Push the current repo up into github
    - `git commit -m "you commit message here"`
- Pushing changes to a separate branch
    - `git push -u origin <branch>`

## Checking Out Someone Else's Repo
- Create a local copy by copying the outside repo's HTTPS
- `cd` into the working directory you hope to clone into
    - `git clone https://www.github.com/user/repo.git`

## Branching in Your Own Repo
- Create a new branch named "feature_x" and switch to it using
    - `git checkout -b feature_x`
- Switch back to master
    - `git checkout master`
- To delete the branch again
    - `git branch -d feature_x`
- A branch is not available to others unless you push the branch to your remote repository
    - `git push origin <branch>`