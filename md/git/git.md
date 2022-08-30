# git

- https://git-scm.com/docs

### mac 과 window

- mac : git config --global core.autocrlf input
- window : git config --global core.autocrlf true

=> 위처럼 설정해야 하는 이유 : 윈도우에서는 \r\n 이 동시에 들어가지만 맥에서는 \n만 들어감.
이런 차이점으로 인해 깃에서 내가 수정하지 않아도 깃 히스토리와 깃 블레임을 보는데 문제가 될 수 있음
위의 명령어를 사용하면 맥과 윈도우의 차이점을 바로잡아주어 히스토리에 영향이 가지않음.

### 자주 사용하는 깃 명령어

- git init : 현재 디렉토리를 기준이로 git 저장소가 생성(초기화)
  - 다음과 같이 생성시 master 브랜치가 생성된다.
- rm -rf .git : 깃 삭제
- git status : 레포지토리의 상태를 보여줌
  - git status -s : short 옵션
- git add : working directory의 변경 내용을 staging area에 추가해준다
  - 모든 변경내용을 넘기고 싶을 때 : git add .
  - 작업 디렉토리의 변경 내용의 일부만 넘기고 싶을 때 : git add <파일/디렉토리 경로 >
- git diff -> commit 이나 branch 사이 다른점 혹은 파일이나 레포지토리와 워킹 디렉토리 사이의 다른점을 보여주는 명령어
  - git diff : working directory와 staging area 사이의 차이 확인
  - git diff HEAD : working directory head commit에 대한 change 확인
- git commit :

### workflow

- working directory : 작업하고있는 디렉토리
  - untracked : 새로만들어진 파일이거나 기존에 존재하던 프로젝트에서 깃을 초기화했을 때 (아직 깃에서 트래킹이 안되는 상태)
  - tracked : 깃이 트래킹하고있는 파일
    - unmodified : 이전 버전과 비교해서 수정되지 않은 것
    - modified : 이전 버전과 비교해서 수정된 것
- staging area : 버전 히스토리에 저장할 준비가 되어있는 파일들을 옮겨놓은 곳
  - git rm --cached <파일이름> : staging area 에서 working directory로 되돌려놓음
- .git directory : 버전의 히스토리를 가지고 있는 곳(staging area에서 커밋하면 이곳으로 옮겨진다)
  - 이곳에 저장된 로컬 버전을 서버로 push, pull 을 이용한다.

### git ignore

- 추가하고 싶지 않은 파일이 있을 떄 사용
  - 보안상으로 위험성이 있는 파일
  - 프로젝트와 관계없는 파일
  - 용량이 너무 커서 제외해야하는 파일
- 항상 최상위 디렉토리에 있어야함

```js
//ex)
echo *.log > .gitignore
```
