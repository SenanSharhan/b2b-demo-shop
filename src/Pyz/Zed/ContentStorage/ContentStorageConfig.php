<?php

/**
 * This file is part of the Spryker Commerce OS.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\ContentStorage;

use Pyz\Zed\Synchronization\SynchronizationConfig;
use Spryker\Zed\ContentStorage\ContentStorageConfig as SprykerContentStorageConfig;

class ContentStorageConfig extends SprykerContentStorageConfig
{
    /**
     * @return string|null
     */
    public function getSynchronizationPoolName(): ?string
    {
        return SynchronizationConfig::DEFAULT_SYNCHRONIZATION_POOL_NAME;
    }
}
