package io.koju.autopos.kernel.domain;

import java.time.LocalDateTime;

public interface AuditedEntity {

    LocalDateTime getCreatedDate();

    LocalDateTime getLastModifiedDate();

}

