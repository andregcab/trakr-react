import { useMutation } from '@apollo/client';
import { SESSIONS } from 'graphql/queries';
import { CREATE_SESSION, DELETE_SESSION, UPDATE_SESSION } from 'graphql/mutations';
import { DEFAULT_ACTIVITY, activityUpdateData } from '../components/lib';

export const useSession = ({
  currentActivity,
  setCurrentActivity,
  showModal,
  setShowModal,
  setShowSnack,
}) => {
  const [sessionCreate] = useMutation(CREATE_SESSION, {
    onCompleted: () => {
      setCurrentActivity(DEFAULT_ACTIVITY);
      setShowModal({ new: false, edit: false, delete: false });
      setShowSnack('added');
    },
  });
  const [sessionDelete] = useMutation(DELETE_SESSION, {
    onCompleted: () => {
      setCurrentActivity(DEFAULT_ACTIVITY);
      setShowModal({ new: false, edit: false, delete: false });
      setShowSnack('deleted');
    },
  });
  const [sessionUpdate] = useMutation(UPDATE_SESSION, {
    onCompleted: () => {
      setCurrentActivity(DEFAULT_ACTIVITY);
      setShowModal({ new: false, edit: false, delete: false });
      setShowSnack('updated');
    },
  });

  const handleDelete = () => {
    sessionDelete({
      variables: { id: currentActivity.sessionId },
      refetchQueries: [{ query: SESSIONS, variables: { userId: '1' } }],
    });
  };

  const handleSave = () => {
    if (showModal.edit) {
      return sessionUpdate({
        variables: {
          id: currentActivity.sessionId,
          data: { activityAttributes: activityUpdateData(currentActivity) },
        },
      });
    }
    return sessionCreate({
      variables: {
        data: { userId: '1', activityAttributes: activityUpdateData(currentActivity) },
      },
      refetchQueries: [{ query: SESSIONS, variables: { userId: '1' } }],
    });
  };

  return { handleDelete, handleSave };
};
