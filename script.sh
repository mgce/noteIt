git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "m.gajda" ];
        then
                GIT_COMMITTER_NAME="Mateusz Gajda";
                GIT_AUTHOR_NAME="Mateusz Gajda";
                GIT_COMMITTER_EMAIL="matgajda@outlook.com";
                GIT_AUTHOR_EMAIL="matgajda@outlook.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD